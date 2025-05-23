import { type ComponentType } from "react";
import type {
  AccessControlProps,
  InjectedProps,
} from "../types/access-control.types";

const currentUserRole = "admin";

function withAccessControl<P extends object>(
  WrappedComponent: ComponentType<P & InjectedProps>
) {
  return (props: P & AccessControlProps) => {
    const {
      roles,
      fallbackComponent: Fallback,
      injectedProps = {},
      ...restProps
    } = props;

    const hasAccess = roles.includes(currentUserRole);

    if (!hasAccess) {
      return <Fallback />;
    }

    const mergedProps = {
      ...restProps,
      ...injectedProps,
    };

    return <WrappedComponent {...(mergedProps as P & InjectedProps)} />;
  };
}

export default withAccessControl;
