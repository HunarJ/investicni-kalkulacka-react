import Form from "./components/Form";
import Chart from "./components/Chart";
import AlignArea from "./components/AlignArea";
import ResultsTable from "./components/ResultsTable";

const App = () => {
  
  return (
    <>
      <section className="container">
        <Form></Form>
        <Chart></Chart>
      </section>
      <section className="table-section" id="results-table-section">
        <AlignArea></AlignArea>
        <ResultsTable></ResultsTable>
      </section>
    </>
  );
};

export default App;
