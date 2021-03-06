/// <reference types="node" />
import { Arch } from "builder-util";
import { BintrayOptions } from "builder-util-runtime";
import { ClientRequest } from "http";
import { HttpPublisher, PublishContext, PublishOptions } from "electron-publish";
export declare class BintrayPublisher extends HttpPublisher {
    private readonly version;
    private readonly options;
    private readonly _versionPromise;
    private readonly client;
    readonly providerName = "Bintray";
    constructor(context: PublishContext, info: BintrayOptions, version: string, options?: PublishOptions);
    private init;
    protected doUpload(fileName: string, arch: Arch, dataLength: number, requestProcessor: (request: ClientRequest, reject: (error: Error) => void) => void): Promise<string | undefined>;
    deleteRelease(isForce?: boolean): Promise<void>;
    toString(): string;
}
