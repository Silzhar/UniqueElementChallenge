import "./styles.css";

var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <div class="header">
    <h1>Unique Element Challenge</h1>
    <img src="../src/assets/logo-ancert.svg" alt="Logo">
  </div>

  <div class="data">
    <div class="information">
      <h2 class="title-fluor">Target</h2>
      <div>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>

      <h2 class="title-fluor">Considerations</h2>
      <ul>
        <li>Values are duplicated only twice.</li>
        <li>There is only one non duplicate value.</li>
        <li>The non duplicate value can be placed anywhere on the array.</li>
        <li>The result must be an integer.</li>
      </ul>
    </div>
    
    <div class="results">
      
      <div class="results-header">
        <h2>Test Data</h2>
        ${arrayTest}
      </div>
        
      
      <div class="results-data">
        <div class="results-data-expected">
          <h2>Expected result</h2>
          4
        </div>

        <div class="results-data-result">
          <h2>Your Result</h2>
          4
        </div>
      </div>
    </div>
  </div>
`;
