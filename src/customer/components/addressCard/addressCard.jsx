import PropTypes from "prop-types";

export function AddressCard({ address }) {
    console.log("address in card, ", address);

    return (
        <div>
            <div className="space-y-3">
                <p className="font-semibold">{address?.firstName} {address?.lastName}</p>
                <p>{address?.state}, {address?.streetAddress}, {address?.zipCode}</p>
                <div className="space-y-1">
                    <p className="font-semibold">Phone Number</p>
                    <p>{address?.mobile}</p>
                </div>
            </div>
        </div>
    );
}

// Props validation
AddressCard.propTypes = {
    address: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        streetAddress: PropTypes.string.isRequired,
        city: PropTypes.string,
        state: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired,
        mobile: PropTypes.string.isRequired,
    }).isRequired,
};
