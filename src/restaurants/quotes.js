const Quotes = ({ inspiration }) => {


    return (
        <tr>
            <td>{inspiration.author} -- </td>
            <td>{inspiration.text}</td>
        </tr>
    )

}
export default Quotes;