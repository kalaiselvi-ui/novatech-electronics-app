import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error("React Error Boundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>

          <p className="text-gray-500 mt-2">
            Please refresh the page and try again.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 bg-primary text-white px-5 py-2 rounded-lg"
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
