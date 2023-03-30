/**
 * Reference for indicate breakpoint in Bootstrap.
 */
type BootstrapBreakpoint = "sm" | "md" | "lg" | "xl" | "xxl";

/**
 * A {@link Record} based object of {@link MediaQueryList} for each breakpoint in
 * Bootstrap.
 */
export const BreakpointMatchMedia: Record<BootstrapBreakpoint, MediaQueryList> = {
    sm: window.matchMedia("(min-width: 576px)"),
    md: window.matchMedia("(min-width: 768px)"),
    lg: window.matchMedia("(min-width: 992px)"),
    xl: window.matchMedia("(min-width: 1200px)"),
    xxl: window.matchMedia("(min-width: 1400px)")
};