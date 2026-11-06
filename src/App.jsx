import { useState } from "react";
import { Navbar } from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [catagory, setCatagory] = useState("general");
  const [searchOn, setSearchOn] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar
        setSearchOn={setSearchOn}
        setCatagory={setCatagory}
        search={search}
        setSearch={setSearch}
      />
      <NewsBoard search={search} searchOn={searchOn} catagory={catagory} />
    </div>
  );
};

export default App;
