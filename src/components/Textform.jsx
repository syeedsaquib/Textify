import React, { useState } from "react";

const Textform = (props) => {
  const changetoUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase", "Success");
  };



  const changetoLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase", "Success");
  };



  const changetoCamelCase = () => {
    let newText = function textToCamelCase(text) {
      var words = text.toLowerCase().split(" ");
      var camelCase = words.map(function (word, index) {
        if (index === 0) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return camelCase.join("");
    };

    setText(newText);
    props.showalert("Converted to CamelCase", "Success");
  };



  const changetoUnicode = () => {
    let newText = function convertToUnicode(str) {
      let unicode = "";

      for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        unicode += "\\u" + ("0000" + charCode.toString(16)).slice(-4);
      }

      return unicode;
    };

    setText(newText);
    props.showalert("Converted From Text to Unicode", "Success");
  };


  const changetoText = () => {
    let newText = function convertUnicodeEscapes(str) {
      return str.replace(/\\u([\dA-F]{4})/gi, function (match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
      });
    };

    setText(newText);
    props.showalert("Converted From Unicode to Text", "Success");
  };



    const base64 = () => {
      let newText = window.btoa(text);
      setText(newText);
      props.showalert("Base64 Encryption complete", "Success");
    };
  
    const base64totext = () => {
      try {
        let newText = window.atob(text);
        setText(newText);
        props.showalert("Base64 Decryption complete", "Success");
      }catch(err){
        props.showalert("Can't Decrypt the given string(First encrypt it)","Fail");
      }
    };


    //work

    const SHA256 = () => {
      try {

        let newText = function sha256(text) {
          function rightRotate(value, amount) {
            return (value>>>amount) | (value<<(32 - amount));
          };
          
          var mathPow = Math.pow;
          var maxWord = mathPow(2, 32);
          var lengthProperty = 'length'
          var i, j;
          var result = ''
        
          var words = [];
          var asciiBitLength = text[lengthProperty]*8;
          var hash = sha256.h = sha256.h || [];
          var k = sha256.k = sha256.k || [];
          var primeCounter = k[lengthProperty];
        
          var isComposite = {};
          for (var candidate = 2; primeCounter < 64; candidate++) {
            if (!isComposite[candidate]) {
              for (i = 0; i < 313; i += candidate) {
                isComposite[i] = candidate;
              }
              hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
              k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
            }
          }
          
          text += '\x80' 
          while (text[lengthProperty]%64 - 56) text += '\x00'
          for (i = 0; i < text[lengthProperty]; i++) {
            j = text.charCodeAt(i);
            if (j>>8) return;
            words[i>>2] |= j << ((3 - i)%4)*8;
          }
          words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
          words[words[lengthProperty]] = (asciiBitLength)
          
          for (j = 0; j < words[lengthProperty];) {
            var w = words.slice(j, j += 16); 
            var oldHash = hash;
            hash = hash.slice(0, 8);
            
            for (i = 0; i < 64; i++) {
              
              var w15 = w[i - 15], w2 = w[i - 2];
        
              var a = hash[0], e = hash[4];
              var temp1 = hash[7]
                + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) 
                + ((e&hash[5])^((~e)&hash[6])) 
                + k[i]
    
                + (w[i] = (i < 16) ? w[i] : (
                    w[i - 16]
                    + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3))
                    + w[i - 7]
                    + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) 
                  )|0
                );
              var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
                + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2]));
              
              hash = [(temp1 + temp2)|0].concat(hash);
              hash[4] = (hash[4] + temp1)|0;
            }
            
            for (i = 0; i < 8; i++) {
              hash[i] = (hash[i] + oldHash[i])|0;
            }
          }
          
          for (i = 0; i < 8; i++) {
            for (j = 3; j + 1; j--) {
              var b = (hash[i]>>(j*8))&255;
              result += ((b < 16) ? 0 : '') + b.toString(16);
            }
          }
          return result;
        };

        
        setText(newText);
        props.showalert("Text converted into SHA356 Hashing", "Success");
      }catch(err){
        props.showalert("Can't Hash the given string","Fail");
      }
    };

    //work




  const clearAll = () => {
    setText("");
    props.showalert("All Cleared", "Success");
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Hello World...");

  return (
    <>
      <div
        className="my-5"
        style={{
          color: props.mode === "dark" ? "white" : "#3b4b5b",
        }}
      >
        <h1 className="my-3 ">{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          col="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#3b4b5b" : "white",
            color: props.mode === "dark" ? "white" : "#3b4b5b",
          }}
        ></textarea>

          {/* MyWork */}
          
          <button
            className={`btn btn-${
              props.mode === "light" ? "info" : "dark"
            } my-3 mx-1`}
            onClick={SHA256}
          >
          SHA256 Hash.
        </button>

          <button
            className={`btn btn-${
              props.mode === "light" ? "info" : "dark"
            } my-3 mx-1`}
            onClick={base64}
          >
          Base64 encryp.
        </button>


        <button
            className={`btn btn-${
              props.mode === "light" ? "info" : "dark"
            } my-3 mx-1`}
            onClick={base64totext}
          >
          Base64 decryp.
        </button>

          {/* MyWork */}




        <button
          className={`btn btn-${
            props.mode === "light" ? "info" : "dark"
          } my-3 mx-1`}
          onClick={changetoUpper}
        >
          UpperCase
        </button>
        
        <button
          className={`btn btn-${
            props.mode === "light" ? "info" : "dark"
          } my-3 mx-1`}
          onClick={changetoLower}
        >
          LowerCase
        </button>
        
        <button
          className={`btn btn-${
            props.mode === "light" ? "info" : "dark"
          } my-3 mx-1`}
          onClick={changetoCamelCase}
        >
          CamelCase
        </button>
        
        <button
          className={`btn btn-${
            props.mode === "light" ? "info" : "dark"
          } my-3 mx-1`}
          onClick={changetoUnicode}
        >
          Text to Unicode
        </button>
        
        <button
          className={`btn btn-${
            props.mode === "light" ? "info" : "dark"
          } my-3 mx-1`}
          onClick={changetoText}
        >
          Unicode to Text
        </button>
        
        <button
          className={`btn btn-${
            props.mode === "light" ? "info" : "dark"
          } my-3 mx-1`}
          onClick={clearAll}
        >
          Clear All
        </button>

        <h2>Summary</h2>
        <p>Character : {text.length}</p>
        <p>
          Words :{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p>Lines: {text.split("\n").length - 1}</p>

      </div>
    </>
  );
};

export default Textform;
