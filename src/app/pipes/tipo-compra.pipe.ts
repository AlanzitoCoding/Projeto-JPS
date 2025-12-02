// Louvado seja o Senhor

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoCompra'
})
export class TipoCompraPipe implements PipeTransform {

  transform(value: string): string {
    const normalized = value?.toLowerCase();

    const map: Record<string, string> = {
      credito: "Crédito",
      debito: "Débito",
      dinheiro: "Dinheiro",
      fiado: "Dívida",
      pix: "PIX",
    };

    return map[normalized] ?? "";
  }
}
