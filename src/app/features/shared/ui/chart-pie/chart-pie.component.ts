import { Component, Inject, Input, NgZone, OnDestroy, OnInit, PLATFORM_ID, SimpleChanges } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-chart-pie',
  imports: [ CommonModule ],
  template: '<div id="chart-pie" style="width: 100%; height: 400px;"></div>',
  styleUrl: './chart-pie.component.css'
})
export class ChartPieComponent implements OnDestroy {

  @Input() clientesPorPlano: { [planoId: string]: number } = {};
  
  // Create root and chart

  private root!: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}


  ngOnChanges(changes: SimpleChanges) {
      /// changes.data
      if (Object.keys(this.clientesPorPlano).length === 0) {
        return;
      } else {
        this.renderChart();
      }
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  

  renderChart(): void {
    // Criar a raiz do gráfico
    this.root = am5.Root.new('chart-pie');

    // Aplicar tema animado
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    const chart = this.root.container.children.push(
      am5percent.PieChart.new(this.root, {
        layout: this.root.verticalLayout,
      })
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(this.root, {
        name: 'Clientes por Plano',
        categoryField: 'plano',
        valueField: 'clientes',
      })
    );

    console.log('ChartPie ==>',Object.keys(this.clientesPorPlano).map((planoId) => ({
      plano: `Plano ${planoId}`,
      clientes: this.clientesPorPlano[planoId],
    })))




    // Configurar os dados
    const data = Object.keys(this.clientesPorPlano).map((planoId) => ({
      plano: `Plano ${planoId}`,
      clientes: this.clientesPorPlano[planoId],
    }));

    series.data.setAll(data);

    // Configurar a legenda
    const legend = chart.children.push(
      am5.Legend.new(this.root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
  
}
  