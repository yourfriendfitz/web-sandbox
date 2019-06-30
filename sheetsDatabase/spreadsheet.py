import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pprint

scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name('database.json', scope)
client = gspread.authorize(creds)

sheet = client.open('example_database').sheet1
# using PrettyPrinter will readably format the data
pp = pprint.PrettyPrinter()

# different ways to retrieve data from spreadsheet
result1 = sheet.get_all_records()
result2 = sheet.row_values(3)
result3 = sheet.col_values(2)
result4 = sheet.cell(5,3)

pp.pprint("All Info")
pp.pprint(result1)
pp.pprint("")
pp.pprint("All from Row")
pp.pprint(result2)
pp.pprint("")
pp.pprint("All from Column")
pp.pprint(result3)
pp.pprint("")
pp.pprint("All from Cell")
pp.pprint(result4)

# adding a cell
sheet.update_cell(5, 3, 'Newtown')
result4 = sheet.cell(5,3).value

pp.pprint(result4)

# adding and deleting a row
row = ["I'm", "updating", "a", "spreadsheet", "from", "Python!"]
index = 7
sheet.insert_row(row, index)
pp.pprint(sheet.row_values(7))
sheet.delete_row(7)




