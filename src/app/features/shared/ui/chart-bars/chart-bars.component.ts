import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, NgZone, PLATFORM_ID, SimpleChanges } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { Cliente } from '../../../../core/models/cliente.model';

@Component({
  selector: 'app-chart-bars',
  imports: [ CommonModule ],
  template: '<div id="chart-bars" style="width: 100%; height: 400px;"></div>',
  styleUrl: './chart-bars.component.css'
})
export class ChartBarsComponent {

  @Input() clientes:  Cliente[] = [];
  
  // Create root and chart

  private rootBars!: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}


  ngOnChanges(changes: SimpleChanges) {
      /// changes.data
      if (Object.keys(this.clientes).length === 0) {
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
    this.rootBars = am5.Root.new('chart-bars');

    // Aplicar tema animado
    this.rootBars.setThemes([am5themes_Animated.new(this.rootBars)]);

    const chart = this.rootBars.container.children.push(
      am5xy.XYChart.new(this.rootBars, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      })
    );

    // Configurar o eixo X (meses)
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(this.rootBars, {
        categoryField: 'mes',
        renderer: am5xy.AxisRendererX.new(this.rootBars, {}),
        tooltip: am5.Tooltip.new(this.rootBars, {}),
      })
    );

    // Configurar o eixo Y (quantidade de clientes)
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.rootBars, {
        renderer: am5xy.AxisRendererY.new(this.rootBars, {}),
      })
    );

    const series = chart.series.push(
      am5xy.ColumnSeries.new(this.rootBars, {
        name: 'Clientes',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'clientes',
        categoryXField: 'mes',
        tooltip: am5.Tooltip.new(this.rootBars, {
          labelText: '{valueY} cliente(s) em {categoryX}',
        }),
      })
    );

    const data = this.processarDados(this.clientes);

    // Configurar os dados no gráfico
    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Adicionar cursor para interatividade
    chart.set('cursor', am5xy.XYCursor.new(this.rootBars, {}));
  }

  processarDados(clientes: Cliente[]): { mes: string; clientes: number }[] {
    // Agrupar clientes por mês
    const clientesPorMes: { [mes: string]: number } = {};

    const umAnoAtras = new Date();
    umAnoAtras.setFullYear(umAnoAtras.getFullYear() - 1);

    clientes.forEach((cliente) => {
      if (new Date(cliente.dataCadastro) >= umAnoAtras) {
      const mes = cliente.dataCadastro.toLocaleString('pt-BR', { year: 'numeric', month: '2-digit' });
      clientesPorMes[mes] = (clientesPorMes[mes] || 0) + 1;
      }
    });

    // Converter para o formato esperado pelo gráfico
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return Object.keys(clientesPorMes).map((mes) => {
      const [ano, mesNumero] = mes.split('-');
      const mesNome = meses[parseInt(mesNumero, 10) - 1];
      return {
      mes: `${mesNome} ${ano}`,
      clientes: clientesPorMes[mes],
      };
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.rootBars) {
        this.rootBars.dispose();
      }
    });
  }
}
