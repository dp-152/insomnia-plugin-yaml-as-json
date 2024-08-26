# insomnia-plugin-yaml-as-json

This plugin allows you to write your request bodies in YAML format and have them automatically converted to JSON.

This allows you to use some features of YAML that are not available in JSON, such as:

- **Comments**:
  ```yaml
  # User email
  email: user@example.com
  # User password
  password: Super$ecret
  ```
  ![example comments](https://github.com/user-attachments/assets/a45fea82-2101-4627-90df-daa7d85ad1cc)
- **Multi-line strings**:
  ```yaml
  description: |
    This is a long description
    that spans multiple lines
  ```
  ![example multiline](https://github.com/user-attachments/assets/5cc321c2-8f65-43a7-ac22-dff6856f97f2)
- **Anchors and aliases**:
  ```yaml
  user:
    name: &user-name John Doe
  admin:
    name: *user-name
    role: admin
  ```
  ![example alias anchor](https://github.com/user-attachments/assets/c7de385f-eb94-4b6c-9832-fabb50c87b82)

- **Merging**:
  ```yaml
  user: &user
    name: John Doe
    email: j.doe@example.com
    createdAt: 2000-01-01T12:59:59.000Z
    description: Regular user
  admin:
    <<: *user
    description: Admin user
    role: admin
  ```
  ![example merging](https://github.com/user-attachments/assets/8a75f0de-c12a-427f-b8ee-767d30ec7ece)

...and more (?)

## Installation

- Through the official Insomnia plugin hub:
  1. Follow the link to the plugin page: [insomnia-plugin-yaml-as-json](https://insomnia.rest/plugins/insomnia-plugin-yaml-as-json)
  2. Click the "Install Plugin" button

- Manually:
  1. Open Insomnia
  2. Go to `Application` > `Preferences` > `Plugins`
  3. Enter `insomnia-plugin-yaml-as-json` in the `npm package name` field
  4. Click the "Install Plugin" button

## How it works
The plugin will intercept any request with body type `YAML` and try to parse the body text using [YAML.parse()](https://github.com/eemeli/yaml?tab=readme-ov-file#yamlparse) from package [yaml](https://www.npmjs.com/package/yaml).

If the parsing is successful, the body type will be changed to `JSON` and the parsed object will be stringified with `JSON.stringify()` and set as the new body text. The `Content-Type` header will also be overwritten to `application/json`.

If the body is empty, or any parsing error occurs, the request will be left unchanged.

To skip the conversion and send the request as YAML without having to disable the plugin, you can add a `_nojson: true` property to the top level YAML object. In this case, the `_nojson` property will be stripped, and the object will be stringified using [YAML.stringify()](https://github.com/eemeli/yaml?tab=readme-ov-file#yamlstringify). No other properties will be removed or modified on the request.

The YAML document will be parsed against the 1.2 spec, with merge support enabled (which is not part of the 1.2 spec). To parse a document against a different version of the spec, you can use a `%YAML` directive at the top of the document:
```yaml
%YAML 1.1
---
ports:
  - 22:22 # Parses as a sexagesimal (base 60) int literal (https://yaml.org/type/int.html)
  - 80:80
status: off # coerces "yes", "on", "y", "no", "n", "off" into booleans (https://yaml.org/type/bool.html)
on: request # ...even for key names!

```
which renders to:
```json
{
	"ports": [
		1342,
		"80:80"
	],
	"status": false,
	"true": "request"
}
```
