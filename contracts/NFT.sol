// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract KittyNFT is ERC721("Kitty NFT", "KTY"), Ownable {
    using Strings for uint256;
    uint tokenCounter;

    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs://QmbwJKXKET3sm4LhBpS2NNuirDja2tp1MH2JerGtKfUcy4/";
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }

    function gift(address _to) public onlyOwner {
        require(tokenCounter <= 10, "Max Nft reached");
        tokenCounter++;
        _safeMint(_to, tokenCounter);
    }
}