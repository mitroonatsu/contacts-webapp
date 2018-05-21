import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#00BCD4';
  colors = {
    'a': '#C62828',
    'b': '#7986CB',
    'c': '#7B1FA2',
    'd': '#0288D1',
    'e': '#43A047',
    'f': '#C0CA33',
    'g': '#FFE0B2',
    'h': '#FFFDE7',
    'i': '#FBC02D',
    'j': '#FFCCBC',
    'k': '#8D6E63',
    'l': '#FF6E40',
    'm': '#212121',
    'n': '#37474F',
    'o': '#ECEFF1',
    'p': '#DD2C00',
    'r': '#FFD180',
    's': '#76FF03',
    't': '#F06292',
    'u': '#69F0AE',
    'v': '#D4E157',
    'w': '#01579B',
    'x': '#03A9F4',
    'y': '#80DEEA',
    'z': '#2962FF',
    'å': '#5E35B1',
    'ä': '#5C6BC0',
    'ö': '#AA00FF',
  };

  transform(value: any, args?: any): any {
    if (value == null || value === '') {
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];
  }
}
