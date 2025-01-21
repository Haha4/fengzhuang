/**
 * 获取上下文配置路径
 *
 * @return: null
 */
export function getContextPath() {
    const pathName = window.location.pathname || '';
    const ctxPath = window.ctxPath;
    let contextPath = '';
    if (ctxPath) {
        const pathNameArray = pathName.split(ctxPath);
        if (pathNameArray.length === 2) {
            contextPath = pathNameArray[0];
        }
    }
    return contextPath;
}
