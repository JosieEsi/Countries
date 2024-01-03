import * as C from './styles'

export const Input = () => {
    return (
        <C.InputArea>
            <input type="text"/>
            <select>
                <option value="Filter by Region" disabled selected>Filter by Region</option>
            </select>
        </C.InputArea>
    )
}