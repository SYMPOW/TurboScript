export function libraryDummy(): string {
    return `
    declare class string {
    
    }
declare class boolean {
    toString(): string {
      return this ? "true" : "false";
    }
  }

  declare class sbyte {
    toString(): string {
      return (this as int32).toString();
    }
  }

  declare class byte {
    toString(): string {
      return (this as uint32).toString();
    }
  }

  declare class short {
    toString(): string {
      return (this as int32).toString();
    }
  }

  declare class ushort {
    toString(): string {
      return (this as uint32).toString();
    }
  }

  declare class int32 {
    toString(): string {
      return "Not implemented";
    }
  }

  declare class uint32 {
    toString(): string {
      return "Not implemented";
    }
  }

  declare class int64 {
    toString(): string {
        return "Not implemented";
    }
  }

  declare class uint64 {
    toString(): string {
      return "Not implemented";
    }
  }

  declare class float32 {
    toString(): string {
        return "Not implemented";
    }
  }

  declare class float64 {
    toString(): string {
      return "Not implemented";
    }
  }
`;
}
