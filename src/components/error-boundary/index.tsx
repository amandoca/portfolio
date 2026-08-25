import { Component, type ErrorInfo, type ReactNode } from "react";
import { Error500 } from "@/components";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Esse log ajuda a investigar erros inesperados durante o desenvolvimento.
    console.error("Unexpected application error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Error500 />;
    }

    return this.props.children;
  }
}
