import React from "react";
import ICON from "../../assets/icons";
import SelectMenu from "../@/SelectMenu";
import Button from "../@/Button";

const methods = ["GET", "POST", "DELETE", "PUT", "PATCH"];

export default function UrlInput({ sending, urlState, methodState, onSendRequest }) {
  const [URL, setURL] = urlState;
  const [ method, setMethod ] = methodState;

  return (
    <div className="pt-[5vh] pb-[2vh]">
      <form onSubmit={(e) => onSendRequest(e)} className="flex gap-1 w-full flex-wrap">
          <SelectMenu
            className="sc_361:flex-grow"
            options={methods}
            optionState={[method, setMethod]}
          />
          <input
            type="url"
            value={URL}
            required
            onChange={({ target : { value } }) => setURL(value)}
            name="url"
            className="text-gray-200 rounded-lg border border-white/5 bg-white/5 hover:bg-gray-100/10 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 flex-grow"
            placeholder="https://example.com"
          />
        <Button
          className="mobile:flex-grow"
          type="submit"
        >
          Send {sending ? <ICON.Loader /> : <ICON.Send />}
        </Button>
      </form>
    </div>
  );
}
