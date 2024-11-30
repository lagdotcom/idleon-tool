import { useCallback } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Input,
  Label,
  Modal,
  ModalOverlay,
  TextField,
} from "react-aria-components";

import { items } from "../data/catalogue";
import { GItemName, Quantity } from "../flavours";
import { useAppDispatch } from "../state/hooks";
import { setOwned } from "../state/owned";
import { getAllOwnedItems } from "../toolbox/tools";
import { ItemCode } from "../toolbox/types";
import styles from "./UploadButton.module.scss";

function getKnownItemQuantities(map: Map<ItemCode, Quantity>) {
  const quantities: [GItemName, Quantity][] = [];
  for (const [code, qty] of map) {
    const item = items.find((i) => i.code === code);
    if (item) quantities.push([item.name, qty]);
  }

  return Object.fromEntries(quantities) as Record<GItemName, Quantity>;
}

export default function UploadButton() {
  const dispatch = useAppDispatch();
  const onTextChange = useCallback(
    (close: () => void) => (value: string) => {
      const json = JSON.parse(value);
      dispatch(setOwned(getKnownItemQuantities(getAllOwnedItems(json))));
      close();
    },
    [dispatch],
  );

  return (
    <DialogTrigger>
      <Button>Upload Idleon Toolbox JSON</Button>
      <ModalOverlay className={styles.overlay} isDismissable>
        <Modal className={styles.modal}>
          <Dialog>
            {({ close }) => (
              <TextField
                className={styles.field}
                onChange={onTextChange(close)}
                autoFocus
              >
                <Label>Paste JSON data here:</Label>
                <Input />
              </TextField>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
