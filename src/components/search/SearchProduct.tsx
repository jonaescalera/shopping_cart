import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { headerProps } from "../header/Header";

const SearchProduct = ({ handleItems, items }: headerProps) => {
  const [options, setOptions] = useState<Product[] | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (inputValue.length > 0) {
      setOpen(true);
    }
  };

  useEffect(() => {
    setOptions(items);
  }, []);

  const onChangeOne = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const term = e.target.value;
    setInputValue(term);

    if (term) {
      let data = options?.filter(
        (x) => x.title.toLowerCase().indexOf(term) > -1
      );
      setOpen(true);
      setOptions(data);
    } else {
      setOpen(false);
    }
  };

  return (
    <div style={{ width: "600px" }} data-testid="search-component">
      <Autocomplete
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        open={open}
        onOpen={handleOpen}
        onClose={() => setOpen(false)}
        freeSolo
        options={options ? options.map((obj) => obj.title) : []}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            onChange={(e) => onChangeOne(e)}
          />
        )}
      />
    </div>
  );
};

export default SearchProduct;
