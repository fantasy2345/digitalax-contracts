import {log, BigInt, Address, store} from "@graphprotocol/graph-ts/index";

import {
    MintGarmentCollection,
    DigitalaxGarmentCollection as DigitalaxGarmentCollectionContract
} from "../generated/DigitalaxGarmentCollection/DigitalaxGarmentCollection";

import {
    DigitalaxGarmentCollection,
} from "../generated/schema";

export function handleGarmentCollectionMinted(event: MintGarmentCollection): void {
    let contract = DigitalaxGarmentCollectionContract.bind(event.address);
    let collectionData = contract.getCollection(event.params.collectionId);
    let collection = new DigitalaxGarmentCollection(event.params.collectionId.toString());
    collection.tokenIds = collectionData.value0;
    collection.tokenUri = collectionData.value2;
    collection.designer = collectionData.value3.toHexString();
    collection.save();
}