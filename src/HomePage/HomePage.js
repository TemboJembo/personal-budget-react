import React from "react";
import ChartJSComponent from "../components/ChartJSComponent";
import D3ChartComponent from "../components/D3ChartComponent";

function HomePage() {
  return (
    <main className="center" id="main">
      <div className="page-area">
        <article>
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you really stop
            to track it down, you would get surprised! Proper budget management
            depends on real data... and this app will help you with that!
          </p>
        </article>

        <article>
          <h1>Chart</h1>
          <ChartJSComponent />
        </article>

        <article>
          <h1>D3 Chart</h1>
          <D3ChartComponent />
        </article>
      </div>
    </main>
  );
}

export default HomePage;