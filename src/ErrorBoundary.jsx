import React, { Component } from "react";
import { Heading } from "rebass";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Heading fontSize={[5, 6, 7]} color="secondary">
          Something went wrong.
        </Heading>
      );
    }

    return this.props.children;
  }
}
