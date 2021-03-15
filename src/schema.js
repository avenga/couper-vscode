// TODO: generate from golang:hcl :)

const blocks = {
    server: {
        labelled: true
    },
    endpoint: {
        parents: ['api', 'server'],
        labelled: true
    },
    files: {
        parents: ['server']
    },
    spa: {
        parents: ['server']
    },
    api: {
        parents: ['server']
    },
    cors: {
        parents: ['api', 'files', 'server', 'spa'],
        labelled: false,
    },
    proxy: {
        parents: ['endpoint']
    },
    request: {
        parents: ['endpoint']
    },
    response: {
        parents: ['endpoint']
    },
    backend: {
        parents: ['definitions', 'proxy', 'request'],
    },
    jwt: {
        parents: ['definitions'],
        labelled: true
    },
    jwt_signing_profile: {
        parents: ['definitions'],
        labelled: true
    },
    basic_auth: {
        parents: ['definitions'],
        labelled: true
    },
    // TODO: missing spec
    // defaults: {
    //     labelled: false,
    // },
    definitions: {
        labelled: false,
    },
    settings: {
        labelled: false,
    }
}

const attributes = {
    // cors
    allowed_origins: {
        parents: ['cors'],
        type: 'array'
    },
    allow_credentials: {
        parents: ['cors'],
        type: 'boolean'
    },
    max_age: {
        parents: ['cors'],
    },

    // server
    hosts: {
        parents: ['server'],
        type: 'array'
    },
    document_root: {
        parents: ['files']
    },
    error_file: {
        parents: ['api', 'files', 'server']
    },
    bootstrap_file: {
        parents: ['spa']
    },
    paths: {
        parents: ['spa'],
        type: 'array'
    },
    base_path: {
        parents: ['server', 'api']
    },

    // backend
    origin: {
        parents: ['backend']
    },
    hostname: {
        parents: ['backend']
    },
    basic_auth: {
        parents: ['backend']
    },
    disable_certificate_validation: {
        parents: ['backend']
    },
    disable_connection_reuse: {
        parents: ['backend']
    },
    http2: {
        parents: ['backend']
    },
    max_connections: {
        parents: ['backend']
    },
    proxy: {
        parents: ['backend']
    },
    connect_timeout: {
        parents: ['backend']
    },
    ttfb_timeout: {
        parents: ['backend']
    },
    timeout: {
        parents: ['backend']
    },

    // endpoint
    request_body_limit: {
        parents: ['endpoint']
    },

    access_control: {
        parents: ['server', 'files', 'spa', 'endpoint', 'api'],
        type: 'array'
    },

    disable_access_control: {
        parents: ['server', 'files', 'spa', 'endpoint', 'api'],
        type: 'array'
    },

    // request / proxy / response
    backend: { // label reference
        parents: ['request', 'proxy']
    },
    body: {
        parents: ['request', 'response']
    },
    headers: {
        parents: ['request', 'response'],
        type: 'block'
    },
    method: {
        parents: ['request']
    },
    url: {
        parents: ['request', 'proxy']
    },
    status: {
        parents: ['response']
    },

    // JWT / signing profile
    cookie: {
        parents: ['jwt']
    },
    header: {
        parents: ['jwt']
    },
    claims: {
        parents: ['jwt', 'jwt_signing_profile']
    },
    required_claims: {
        parents: ['jwt'],
        type: 'array'
    },
    key: {
        parents: ['jwt', 'jwt_signing_profile']
    },
    key_file: {
        parents: ['jwt', 'jwt_signing_profile']
    },
    signature_algorithm: {
        parents: ['jwt', 'jwt_signing_profile']
    },
    ttl : {
        parents: ['jwt_signing_profile']
    },


    // basic_auth
    user: {
        parents: ['basic_auth']
    },
    password: {
        parents: ['basic_auth']
    },
    realm: {
        parents: ['basic_auth']
    },
    htpasswd_file: {
        parents: ['basic_auth']
    },

    // meta-attributes
    remove_request_headers: {
        parents: ['backend', 'endpoint', 'proxy'],
        type: 'block'
    },
    remove_response_headers: {
        parents: ['backend', 'endpoint', 'proxy'],
        type: 'block'
    },
    add_request_headers: {
        parents: ['backend', 'endpoint', 'proxy'],
        type: 'block'
    },
    add_response_headers: {
        parents: ['backend', 'endpoint', 'proxy'],
        type: 'block'
    },
    set_request_headers: {
        parents: ['backend', 'endpoint', 'proxy'],
        type: 'block'
    },
    set_response_headers: {
        parents: ['backend', 'endpoint', 'proxy'],
        type: 'block'
    },
    remove_query_params: {
        parents: ['backend', 'endpoint', 'proxy'],
        type: 'array'
    },
    add_query_params: {
        parents: ['backend', 'endpoint', 'proxy'],
        type: 'block'
    },
    set_query_params: {
        parents: ['backend', 'endpoint', 'proxy'],
        type: 'block'
    },
    path: {
        parents: ['backend', 'endpoint', 'proxy']
    },

    // openapi block and attributes
    openapi: {
        parents: ['backend'],
        type: 'inline-block'
    },
    file: {
        parents: ['openapi'],
    },
    ignore_request_violations: {
        parents: ['openapi'],
        type: 'boolean'
    },
    ignore_response_violations: {
        parents: ['openapi'],
        type: 'boolean'
    },

    // settings
    default_port: {
        parents: ['settings']
    },
    health_path: {
        parents: ['settings']
    },
    log_format: {
        parents: ['settings']
    },
    no_proxy_from_env: {
        parents: ['settings']
    },
    xfh: {
        parents: ['settings'],
        type: 'boolean'
    },
    request_id_format: {
        parents: ['settings']
    },
}

const functions = {
    base64_decode: { description: '	Decodes Base64 data, as specified in RFC 4648.' },
    base64_encode: { description: '	Encodes Base64 data, as specified in RFC 4648.' },
    coalesce: { description: '	Returns the first of the given arguments that is not null.' },
    json_decode: { description: '	Parses the given JSON string and, if it is valid, returns the value it represents.' },
    json_encode: { description: '	Returns a JSON serialization of the given value.' },
    jwt_sign: { description: '	jwt_sign creates and signs a JSON Web Token (JWT) from information from a referenced jwt_signing_profile block and additional claims provided as a function parameter.' },
    to_lower: { description: '	Converts a given string to lowercase.' },
    to_upper: { description: '	Converts a given string to uppercase.' },
    unixtime: { description: '	Retrieves the current UNIX timestamp in seconds.' },
    url_encode: { description: '	URL-encodes a given string according to RFC 3986.' },
}

const commonProperties = ['ctx', 'cookies', 'headers']
const variables = {
    env: [],
    req: commonProperties.concat(...['id', 'method', 'path', 'path_params', 'query', 'post', 'url', 'json_body']),
    bereq: commonProperties.concat(...['method', 'path', 'query', 'post', 'url']),
    beresp: commonProperties.concat(...['status', 'json_body']),
}

module.exports = { attributes, blocks, functions, variables }
