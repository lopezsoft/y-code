DELIMITER // CREATE PROCEDURE ycode_tf7tp.`sp_kardex_invoice`(IN `PSaleId` BIGINT, IN `PProductId` BIGINT) BEGIN DECLARE VSaleId,
VDone,
VProductId,
VStockId,
VDone2 BIGINT DEFAULT 0;DECLARE VBranchId SMALLINT DEFAULT 0;DECLARE VSalePrice,
VAmount,
VDiscount,
VStock,
VTotal DECIMAL(22, 2) DEFAULT 0;DECLARE VSalaDate DATE;DECLARE cur CURSOR FOR
SELECT
    td.id,
    td.product_id,
    td.amount,
    if(
        td.discount < 0,
        ROUND(
            td.unit_price + ((td.discount * -1) / td.amount),
            2
        ),
        td.unit_price - (td.discount / td.amount)
    ) AS sale_price,
    if(td.discount > 0, td.discount, 0) discount,
    mv.invoice_date,
    td.total,
    mv.branch_id
FROM
    sales_detail AS td
    LEFT JOIN products AS ta ON td.product_id = ta.id
    LEFT JOIN sales_master AS mv ON td.sale_id = mv.id
WHERE
    td.product_id = PProductId
    AND td.sale_id = PSaleId;DECLARE CONTINUE HANDLER FOR SQLSTATE '02000'
SET
    VDone = 1;OPEN cur;REPEAT FETCH cur INTO VSaleId,
    VProductId,
    VAmount,
    VSalePrice,
    VDiscount,
    VSalaDate,
    VTotal,
    VBranchId;IF NOT VDone THEN
SET
    VDone2 = 0;REPEAT
SELECT
    id,
    stock INTO VStockId,
    VStock
FROM
    stock_control
WHERE
    stock > 0
    AND id_product = VProductId
    AND id_branch_office = VBranchId
ORDER BY
    date_seat
LIMIT
    1;IF VStock >= VAmount THEN
INSERT INTO
    stock_outings (
        stock_id,
        outputs,
        sale_price,
        discount,
        departure_date,
        sale_id,
        stock
    )
VALUES(
        VStockId,
        VAmount,
        VSalePrice,
        VDiscount,
        VSalaDate,
        VSaleId,
        VStock - VAmount
    );
UPDATE
    stock_control
SET
    outputs = outputs + VAmount
WHERE
    id = VStockId
LIMIT
    1;
SET
    VDone2 = 1;ELSEIF VAmount > VStock THEN
INSERT INTO
    stock_outings (
        stock_id,
        outputs,
        sale_price,
        discount,
        departure_date,
        sale_id,
        stock
    )
VALUES(
        VStockId,
        VStock,
        VSalePrice,
        VDiscount,
        VSalaDate,
        VSaleId,
        VAmount - VStock
    );
UPDATE
    stock_control
SET
    outputs = outputs + VStock
WHERE
    id = VStockId
LIMIT
    1;IF (VAmount - VStock) = 0 THEN
SET
    VDone2 = 1;END IF;END IF;UNTIL VDone2 = 1 END REPEAT;END IF;UNTIL VDone END REPEAT;CLOSE cur;END // DELIMITER;
