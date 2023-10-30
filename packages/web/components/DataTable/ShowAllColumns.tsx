import Button from "@components/Button";
import { useDataTableContext } from "@contexts/dataTable";
import { useSqlEditorContext } from "@contexts/sqleditor";
import { convertToSqlWithNewCols, getColumns } from "@lib/parseSqlQuery";
import css from "./index.module.css";

export default function ShowAllColumns() {
  const { executeQuery } = useSqlEditorContext();
  const { params, tableNames } = useDataTableContext();

  if (!params.tableName || tableNames.length > 1) return null;

  const q = params.q ?? `SELECT * FROM \`${params.tableName}\``;
  const col = getColumns(q);

  if (!col || col === "*") return null;

  const onClick = async () => {
    const query = convertToSqlWithNewCols(q, "*", tableNames);
    await executeQuery({ ...params, query });
  };
  return (
    <Button.Underlined className={css.colsButton} onClick={onClick}>
      Show all columns
    </Button.Underlined>
  );
}
