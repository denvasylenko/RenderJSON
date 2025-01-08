export const UI_DOM_SCHEMA = {
	"type": "VerticalLayout",
	"elements": [
		{
			"type": "HorizontalLayout",
			"elements": [
				{
					"type": "InputControl",
					"scope": "name"
				},
				{
					"type": "InputControl",
					"scope": "age"
				},
				{
					"type": "InputControl",
					"scope": "birthDate"
				}
			]
		},
		{
			"type": "HorizontalLayout",
			"elements": [
				{
					"type": "DropdownControl",
					"scope": "height"
				},
				{
					"type": "RadioButtonControl",
					"scope": "nationality"
				},
				{
					"type": "TextAreaControl",
					"scope": "occupation"
				}
			]
		}
	]
}