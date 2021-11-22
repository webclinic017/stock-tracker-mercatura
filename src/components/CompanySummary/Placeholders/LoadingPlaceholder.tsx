import React from "react"
import { usePlaceholderAnimation } from "../../../hooks/usePlaceholderAnimation"

function ErrorPlaceholder() {
	const opacity = usePlaceholderAnimation()

	return (
		<div
			className={"summary-placeholder"}
			style={{ opacity: opacity }}
			data-testid="summary-loading-placeholder"
		>
			<div className={"summary-placeholder__title"} />
			<div className={"summary-placeholder__content"} />
			<div className={"summary-placeholder__content"} />
			<div
				className={
					"summary-placeholder__content summary-placeholder__content--short"
				}
			/>
			<div className={"summary-placeholder__content"} />
			<div
				className={
					"summary-placeholder__content summary-placeholder__content--short"
				}
			/>
			<div className={"summary-placeholder__content"} />
			<div className={"summary-placeholder__content"} />
			<div
				className={
					"summary-placeholder__content summary-placeholder__content--short"
				}
			/>
		</div>
	)
}

export default ErrorPlaceholder
