import CreateTableForm from "../components/CreateTab";
import Nav from "../components/Nav";

function CreateTable():JSX.Element {
  return (
    <div id="create-table" className="w-full">
      <Nav />
      <CreateTableForm create={true} />
    </div>
  )
}

export default CreateTable