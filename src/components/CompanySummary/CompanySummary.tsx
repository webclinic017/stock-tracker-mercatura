import React, { useState, useEffect } from "react"
import { requestCompanyInfo } from "./services"
import "./styles.css"
import { useSymbol } from "../../contexts/SymbolContext"
import Placeholder from "./Placeholder"
import { FLAGS, useRenderFlag } from "../../contexts/RenderFlagContext"
import { StatusStringType } from "../../utils/statusKeys"

interface Summary {
	symbol : string
	companyName : string
	website : string
	description : string	
}

interface SummaryState {
	status: StatusStringType
	body?: Summary
}

const CompanySummary = () => {
	const [companyInfo, setCompanyInfo] = useState<SummaryState>({
		status: "loading"
	})
	const { symbol } = useSymbol()
	const { renderFlag } = useRenderFlag()

	const requestData = async () => {
		try {
			const response = await requestCompanyInfo(symbol)
			const desc = response.description.substring(0, 500).concat("...")
			const body = { ...response, description: desc }
			setCompanyInfo({ status: "resolved", body })
		} catch (error) {
			console.error("Error retreiving company summary data: " + error)
			setCompanyInfo({ status: "error"})
		}
	}

	useEffect(() => {
		if (renderFlag === FLAGS.summary) {
			requestData()
		} else if (renderFlag === -1) {
			setCompanyInfo({ status: "loading" })
		}
	}, [symbol, renderFlag])

	const summaryRenderer = () => {
		let content = null
		if (companyInfo.status === "loading") {
			content = <Placeholder />
		}
		if (companyInfo.status === "error") {
			content = <Placeholder />
		}
		if (companyInfo.status === "resolved") {
			content = companyInfo.body ? (
				<>
					<div className="company__name">{`${companyInfo.body.companyName} (${companyInfo.body.symbol})`}</div>
					<div className="company__website">
						{companyInfo.body.website}
					</div>
					<div className="company__description">
						{companyInfo.body.description}
					</div>
				</>
			) : null;
		}
		return (
			<div className="company__summary">
				<h2>Company Summary</h2>
				{content}
			</div>
		)
	}

	return summaryRenderer()
}

export default CompanySummary