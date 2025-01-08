export const COMPONENTS_PROPS_CONFIG = {
  "name": {
    "type": "string",
    "minLength": 3,
    "description": "Please enter your name"
  },
  "vegetarian": {
    "type": "boolean"
  },
  "birthDate": {
    "type": "string",
    "format": "date"
  },
  "nationality": {
    "type": "string",
    "enum": [
      "DE",
      "IT",
      "JP",
      "US",
      "RU",
      "Other"
    ]
  },
  "personalData": {
    "type": "object",
    "properties": {
      "age": {
        "type": "integer",
        "description": "Please enter your age."
      },
      "height": {
        "type": "number"
      },
      "drivingSkill": {
        "type": "number",
        "maximum": 10,
        "minimum": 1,
        "default": 7
      }
    },
    "required": [
      "age",
      "height"
    ]
  },
  "occupation": {
    "type": "string"
  },
  "postalCode": {
    "type": "string",
    "maxLength": 5
  }
}