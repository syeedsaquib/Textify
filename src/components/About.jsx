const About = (props) => {
  let MyStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#3b4b5b" : "white",
  };

  return (
    <>
      <div className="container my-5 p-3  " style={{ color: MyStyle.color }}>
        <h1>About Us </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={MyStyle}
              >
                <strong>Introduction</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={MyStyle}
            >
              <div className="accordion-body">
                "Welcome to Textify, your one-stop destination for all your text
                modification needs. With Textify, you can easily transform your
                text into various formats to suit your requirements. Whether you
                need to convert text to uppercase, lowercase, camelcase,
                Unicode, Unicode to text, or clear all formatting and also encryption, 
                decryption and hashing option are there like Base64 encryption and 
                SHA256 Hashing, our powerful text modifier tool has got you covered."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={MyStyle}
              >
                <strong>Description</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={MyStyle}
            >
              <div className="accordion-body">
                "At Textify, we understand that words hold immense power. Our
                mission is to provide you with a user-friendly platform that
                empowers you to customize and enhance your text effortlessly.
                With just a few simple clicks, you can modify your text to make
                it stand out, comply with specific formatting guidelines, or
                simply explore creative possibilities."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={MyStyle}
              >
                <strong>Features</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={MyStyle}
            >
              <div className="accordion-body">
                "Textify offers a diverse range of text modification methods.
                Perform different encryption, decryption and hashing function like <b>Base64 </b>  
                Encryption and <b>SHA256</b> Hashing algorithm which is very common and Merkle–Damgård construction
                hashing function which return a 64 characters string hashed form of given string.
                Convert your text to uppercase to add emphasis and make a bold
                statement. Transform it to lowercase for a more casual and
                approachable tone. Utilize camelcase to give your text a stylish
                touch, perfect for titles and headings. Explore the world of
                Unicode and effortlessly convert between Unicode characters and
                their corresponding textual representations. And when you want a
                fresh start, our clear all feature removes all formatting,
                allowing you to begin anew with a clean slate." "Whether you're
                a writer, student, professional, or simply someone who loves
                playing with words, Textify is here to make your text
                modification journey enjoyable and hassle-free. Experience the
                power of transforming your text with Textify and unlock a new
                level of creativity."
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
