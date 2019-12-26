import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import TirCanv from "../components/tircam"

const IndexPage = () => (
  <Layout>
              <div class="row">
                <div>
                  <img id="colour" width="320"/>
                </div>
                <TirCanv/>
             </div>
              <div>
                <canvas id="composite" width="640" height="480" />
              </div>
              <span id="temp-val"></span>
              <div>
                  Set X [<span id="val-x"></span>]
                  <input type="range" id="range-x" onchange="shift_x=this.value" />
                  Set Y [<span id="val-y"></span>]
                  <input type="range" id="range-y" onchange="shift_y=this.value" />
                  Set scale [<span id="val-scale"></span>]
                  <input type="range" id="range-scale" onchange="tir_scale=this.value" />
                </div>
              <a href="authorised/status.jsp">Sensor status</a>

  </Layout>
)

export default IndexPage
