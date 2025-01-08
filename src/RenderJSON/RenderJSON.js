import { UI_DOM_SCHEMA } from "./ui_dom_schema";
import { COMPONENTS_PROPS_CONFIG } from "./components_props_schema";
import { DATA_SCHEMA } from "./data_schema";
import { RULES_SCHEMA } from "./rules_schema";
import {COMPONENTS, FormProviderWrapper} from './components'
import React from 'react'


export const RenderJSON = () => {
	const renderElement = (element) => {
		const props = COMPONENTS_PROPS_CONFIG[element.scope] ?? {}
		const Component = COMPONENTS[element.type]
		const rule = RULES_SCHEMA[element.scope] ?? true

		if (!rule) return null

		if (element.elements && Array.isArray(element.elements)) {
			return (
				<Component name={element.scope} {...props}>
					{element.elements.map((child, index) => (
							<React.Fragment key={index}>{renderElement(child)}</React.Fragment>
						))}
				</Component>
			)
		}
		return <Component  name={element.scope} {...props}/>
	};
	
	return (
		<FormProviderWrapper data={DATA_SCHEMA}>
			<div>{renderElement(UI_DOM_SCHEMA)}</div>
		</FormProviderWrapper>
	);
}