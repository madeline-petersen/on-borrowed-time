export function calcElementHeight(node) {
  const computedStyle = window.getComputedStyle(node, null);
  const padTop = Number(computedStyle.paddingTop.split('px')[0]);
  const padBottom = Number(computedStyle.paddingBottom.split('px')[0]);
  return [].reduce.call(
    node.children,
    (total, curr) => {
      return total + curr.offsetHeight;
    },
    padTop + padBottom
  );
}
