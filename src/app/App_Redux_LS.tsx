import {AppWrapper} from "../common/styled-comps/styles";
import {Output_Redux_LS} from "../components/components-for-redux-ls/Output_Redux_LS";
import {Set_Redux_LS} from "../components/components-for-redux-ls/Set_Redux_LS";
import {useSelector} from "react-redux";
import {RootStateType} from "./store_Redux_LS";

export const App_Redux_LS = () => {
    const showOutput = useSelector<RootStateType, boolean>(state => state.showOutput.showOutput)

    return (
        <AppWrapper>
            {
                showOutput
                    ? <Output_Redux_LS/>
                    : <Set_Redux_LS/>
            }

        </AppWrapper>
    );
}

