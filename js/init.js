import Piejs from './app/pie.js'
import Barjs from './app/bar.js'
const piejs = new Piejs()
const barjs = new Barjs()


function load() {
  // Bar
  const barChartId = document.getElementById('barChart')
  // barjs.example1(barChartId)
  barjs.example2(barChartId)

  // Pie
  const pieChartId = document.getElementById('pieChart')
  // piejs.example1(pieChartId)
  piejs.example2(pieChartId)

}

async function iniApp() {
  load()
}
iniApp()