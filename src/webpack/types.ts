import { LibraryOptions } from "webpack";

interface ExposesConfig {
  import: string | string[];
  name?: string;
}

interface ExposesObject {
  [index: string]: string | ExposesConfig | string[];
}

interface RemotesConfig {
  external: string | string[];
  shareScope?: string;
}

interface RemotesObject {
  [index: string]: string | RemotesConfig | string[];
}

/**
 * Advanced configuration for modules that should be shared in the share scope.
 */
declare interface SharedConfig {
  eager?: boolean;
  import?: string | false;
  packageName?: string;
  requiredVersion?: string | false;
  shareKey?: string;
  shareScope?: string;
  singleton?: boolean;
  strictVersion?: boolean;
  version?: string | false;
}

/**
 * Modules that should be shared in the share scope. Property names are used to match requested modules in this compilation. Relative requests are resolved, module requests are matched unresolved, absolute paths will match resolved requests. A trailing slash will match all requests with this prefix. In this case shareKey must also have a trailing slash.
 */
declare interface SharedObject {
  [index: string]: string | SharedConfig;
}

interface ModuleFederationPluginOptions {
  exposes?: (string | ExposesObject)[] | ExposesObject;
  filename?: string;
  library?: LibraryOptions;
  name?: string;
  remoteType?:
    | "import"
    | "var"
    | "module"
    | "assign"
    | "this"
    | "window"
    | "self"
    | "global"
    | "commonjs"
    | "commonjs2"
    | "commonjs-module"
    | "commonjs-static"
    | "amd"
    | "amd-require"
    | "umd"
    | "umd2"
    | "jsonp"
    | "system"
    | "promise"
    | "script"
    | "node-commonjs";

  remotes?: (string | RemotesObject)[] | RemotesObject;
  runtime?: string | false;
  shareScope?: string;
  shared?: (string | SharedObject)[] | SharedObject;
}

export interface CommonConfig extends ModuleFederationPluginOptions {
  port?: number;
}
