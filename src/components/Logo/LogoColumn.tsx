import React from "react"
import logo from "../../assets/ra-logo.svg"
import { useHistory } from "react-router-dom"
import { useFocus } from "../../contexts/FocusContext"
import { useSymbol } from "../../contexts/SymbolContext"

interface LogoColumnPropsType {
	alignment: "center" | "stretch"
}

const LogoColumn: React.FC<LogoColumnPropsType> = ({ alignment }) => {
	const history = useHistory()
	const { setSymbol } = useSymbol()
	const { setFocused } = useFocus()

	const handleClick = () => {
		setSymbol("")
		history.push("/")
	}
	return (
		<div className="logo-section" onClick={() => setFocused(false)}>
			<img
				src={logo}
				height={92}
				width={66}
				className={`logo logo-${alignment}`}
				alt={"Reactive Analystics Logo"}
				onClick={handleClick}
			/>
		</div>
	)
}

export default LogoColumn