import Form from "next/form";

const SearchForm = () => {
  const query = "query";

  const reset = () => {
    // Reset the form
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };

  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={""}
        placeholder="Search Startups"
        className="search-input"
      />
      <div className="flex gap-2">
        {query && (
          <button type="reset" onClick={reset}>
            Search
          </button>
        )}
      </div>
    </Form>
  );
};

export default SearchForm;
