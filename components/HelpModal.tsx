import { Modal } from "semantic-ui-react";
import React from "react";

interface HelpModalProps {
    open: boolean;
    onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} closeIcon>
            <Modal.Header content="Tips for Using the Soundboard" />
            <Modal.Content>
                <p>Go your own way</p>
            </Modal.Content>
        </Modal>
    );
};

export default HelpModal;
