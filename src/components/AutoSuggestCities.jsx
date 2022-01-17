import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import cx from "classnames";
import "./AutoSuggestCities.css";

export default function AutoSuggestCities({ handleFormData }) {
  const [city, setCity] = useState("");
  const handleChange = (address) => {
    setCity(address);
  };
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => handleFormData("city", address))
      .catch((error) => console.error("Error", error));

    setCity(address);
  };

  const onError = (status, clearSuggestions) => {
    console.error("Google Maps API returned error with status: ", status);
    clearSuggestions();
  };
  return (
    <PlacesAutocomplete
      value={city}
      onChange={handleChange}
      onSelect={(e) => handleSelect(e)}
      // searchOptions={searchOptions}
      onError={onError}
      highlightFirstSuggestion
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="search-ctn mb-4">
          <input
            {...getInputProps({
              placeholder: "City ...",
              className: "location-search-input",
            })}
          />
          <div
            className={cx(
              "autocomplete-dropdown-container",
              suggestions.length > 0 && "shadow"
            )}
          >
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, index) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";

              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                  })}
                  key={index}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
