import React, { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";
import InputBox from "./inputBox.jsx";
import useNumberFormatter from "../hooks/useNumberformatter.js";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("dkk");
  const [convertedAmount, setConvertedAmount] = useState("");

  const { data: currencyInfo } = useCurrencyInfo(from); //calling the custom hook
  const options = Object.keys(currencyInfo);

//use hook number formatter
const {formattedNumbers} = useNumberFormatter([convertedAmount])//use the hook

 const formatAmount = (value) => {}
  const swap = () => {
    //swap from and to
    const newFrom = to;
    const newTo = from;
    const newConvertedAmount = amount * currencyInfo[to];
    //uodate from, to and the converted amount
    setFrom(newFrom);
    setTo(newTo);
    setConvertedAmount(newConvertedAmount);
    //update the amount to the new converted amount
    setAmount(newConvertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div>
      <div className="w-full">
        <div className=" max-w-md p-5 mx-5 my-5 border-2 border-[#3183CC] rounded-xl bg-[#f4f4f6] w-[358.4px] h-[303px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black text-white  text-xs px-2 py-0.5"
                onClick={swap}
                style={{
                  transition: "transform 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform =
                    "translate(-50%, -50%) scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform =
                    "translate(-50%, -50%) scale(1)")
                }
                onFocus={(e) =>
                  (e.currentTarget.style.transform =
                    "translate(-50%, -50%) scale(1.1)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.transform =
                    "translate(-50%, -50%) scale(1)")
                }
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="To"
                currencyOptions={options}
                amount={formattedNumbers[0]}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-40 text-white text-xs bg-black rounded-full mx-auto flex justify-center"
              style={{
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onFocus={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onBlur={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
