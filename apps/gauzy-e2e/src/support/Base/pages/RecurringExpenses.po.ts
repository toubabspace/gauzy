import {
	verifyElementIsVisible,
	clickButton,
	clickButtonByIndex,
	clearField,
	enterInput,
	clickKeyboardBtnByKeycode,
	clickElementByText,
	getLastElement,
	waitElementToHide
} from '../utils/util';
import { RecurringExpensesPage } from '../pageobjects/RecurringExpensesPageObject';

export const addNewExpenseButtonVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.addNewExpenseButtonCss);
};

export const clickAddNewExpenseButton = () => {
	clickButton(RecurringExpensesPage.addNewExpenseButtonCss);
};

export const employeeDropdownVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.employeeDropdownCss);
};

export const clickEmployeeDropdown = () => {
	clickButton(RecurringExpensesPage.employeeDropdownCss);
};

export const selectEmployeeFromDropdown = (index) => {
	clickButtonByIndex(RecurringExpensesPage.dropdownOptionCss, index);
};

export const clickKeyboardButtonByKeyCode = (keycode) => {
	clickKeyboardBtnByKeycode(keycode);
};

export const expenseDropdownVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.expenseDropdownCss);
};

export const clickExpenseDropdown = () => {
	clickButton(RecurringExpensesPage.expenseDropdownCss);
};

export const selectExpenseOptionDropdown = (text) => {
	clickElementByText(RecurringExpensesPage.dropdownOptionCss, text);
};

export const expenseValueInputVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.valueInputCss);
};

export const enterExpenseValueInputData = (data) => {
	clearField(RecurringExpensesPage.valueInputCss);
	enterInput(RecurringExpensesPage.valueInputCss, data);
};

export const saveExpenseButtonVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.saveExpenseButtonCss);
};

export const clickSaveExpenseButton = () => {
	clickButton(RecurringExpensesPage.saveExpenseButtonCss);
};

export const settingsButtonVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.settingsButtonCss);
};

export const clickSettingsButton = () => {
	getLastElement(RecurringExpensesPage.settingsButtonCss);
};

export const editButtonVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.editExpenseButtonCss);
};

export const clickEditButton = () => {
	getLastElement(RecurringExpensesPage.editExpenseButtonCss);
};

export const deleteButtonVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.deleteExpenseButtonCss);
};

export const clickDeleteButton = () => {
	getLastElement(RecurringExpensesPage.deleteExpenseButtonCss);
};

export const deleteOnlyThisRadioButtonVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.deleteOnlyThisRadioButtonCss);
};

export const clickDeleteOnlyThisRadioButton = () => {
	clickButton(RecurringExpensesPage.deleteOnlyThisRadioButtonCss);
};

export const confirmDeleteButtonVisible = () => {
	verifyElementIsVisible(RecurringExpensesPage.confirmDeleteExpenseButtonCss);
};

export const clickConfirmDeleteButton = () => {
	clickButton(RecurringExpensesPage.confirmDeleteExpenseButtonCss);
};

export const waitMessageToHide = () => {
	waitElementToHide(RecurringExpensesPage.toastrMessageCss);
};
