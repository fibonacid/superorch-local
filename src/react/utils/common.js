import _ from "lodash";

/**
 * This function is used to transform
 * all the prop keys to lower case.
 * By doing so you can avoid errors like this:
 *
 * React does not recognize the `contentState` prop on a DOM element.
 * If you intentionally want it to appear in the DOM as a custom attribute,
 * spell it as lowercase `contentstate` instead.
 * If you accidentally passed it from a parent component, remove it from the DOM element.
 *
 * @param props
 * @returns {{}}
 */
export function lowerCasedProps(obj) {
  return _.mapKeys(obj, (value, key) => {
    return key.toLowerCase()
  });
}
