var svgtojsx = require('svg-to-jsx');

module.exports = function replaceAll(str) {
  // replace all strings with Strings from array
  const mapObj = {
    '<svg': '<Svg width={width} height={height} opacity={opacity} style={style}',
    '<circle': '<Circle',
    '<ellipse': '<Ellipse',
    '<g': '<G',
    '<text': '<Text',
    '<tspan': '<TSpan',
    '<textPath': '<TextPath',
    '<path': '<Path',
    '<polygon': '<Polygon',
    '<polyline': '<Polyline',
    '<line': '<Line',
    '<rect': '<Rect',
    '<use': '<Use',
    '<image': '<Image',
    '<symbol': '<Symbol',
    '<defs': '<Defs',
    '<linearGradient': '<LinearGradient',
    '<radialGradient': '<RadialGradient',
    '<stop': '<Stop',
    '<clipPath': '<ClipPath',
    '<mask': '<ClipPath',
    'svg>': 'Svg>',
    'circle>': 'Circle>',
    'ellipse>': 'Ellipse>',
    'g>': 'G>',
    'text>': 'Text>',
    'tspan>': 'TSpan>',
    'textPath>': 'TextPath>',
    'path>': 'Path>',
    'polygon>': 'Polygon>',
    'polyline>': 'Polyline>',
    'line>': 'Line>',
    'rect>': 'Rect>',
    'use>': 'Use>',
    'image>': 'Image>',
    'symbol>': 'Symbol>',
    'defs>': 'Defs>',
    'linearGradient>': 'LinearGradient>',
    'radialGradient>': 'RadialGradient>',
    'stop>': 'Stop>',
    'clipPath>': 'ClipPath>',
    'mask>': 'ClipPath>',
    cy: 'y',
    cx: 'x'
  };

  const regEx = new RegExp(Object.keys(mapObj).join('|'), 'gi');

  return str.replace(regEx, function(matched) {
    return mapObj[matched];
  });
};
