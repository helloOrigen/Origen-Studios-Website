module.exports = function (file, api) {
  const j = api.jscodeshift
  const root = j(file.source)

  root.find(j.JSXAttribute, {
    name: {
      name: 'style'
    }
  }).forEach((attr) => {
    const styles = attr.value && attr.value.expression

    if (styles && styles.type === 'StringLiteral') {
      const styleObject = j.callExpression(j.memberExpression(j.identifier('Object'), j.identifier('fromEntries')), [
        j.callExpression(j.memberExpression(j.callExpression(j.memberExpression(j.identifier('Object'), j.identifier('entries')), [styles]), j.identifier('map')), [
          j.arrowFunctionExpression([j.identifier('entry')], j.arrayExpression([j.memberExpression(j.identifier('entry'), j.literal(0)), j.memberExpression(j.memberExpression(j.identifier('entry'), j.literal(1)), j.identifier('trim'))]))
        ])
      ])

      attr.value = styleObject
    }
  })

  return root.toSource()
}
