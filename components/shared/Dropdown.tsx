import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ICategory } from "@/lib/database/models/category.model"
import { startTransition, useEffect, useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "../ui/input"
import { createCategory, getAllCategories } from "@/lib/actions/category.actions"
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

type DropdownProps = {
  value?: string
  onChangeHandler?: () => void
}

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [newCategory, setNewCategory] = useState('');
  const [show, setShow] = useState(true);

  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trim()
    })
      .then((category) => {
        setCategories((prevState) => [...prevState, category])
      })
  }

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[])
    }

    getCategories();
  }, [])

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field items-center">
        <SelectValue className="text-center" placeholder="Category" />
      </SelectTrigger>
      <SelectContent className="select-item flex flex-col bg-gray-200 p-regular-14">
        {categories.length > 0 && categories.map((category) => (
          <SelectItem key={category._id} value={category._id} className="select-item p-regular-14">
            {category.name}
          </SelectItem>
        ))}
        <div className="w-full p-6">
          <Alert show={show} variant="success" className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
            <Alert.Heading className="text-lg font-semibold">New Category</Alert.Heading>
            <Input
              type="text"
              placeholder="Category name"
              className="input-field mt-3 p-2 border border-gray-600 rounded-md"
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <hr className="my-4 border-t border-gray-300" />
            <div className="flex justify-end">
              {/* <Button
              onClick={() => setShow(false)}
              variant="outline-danger"
              className="mr-2 hover:bg-black hover:border-red-600 hover:text-white w-full rounded-full"
            >
              Cancel
            </Button> */}
              <Button
                onClick={() => startTransition(handleAddCategory)}
                variant="primary"
                className="hover:bg-yellow-400 hover:border-green-600 hover:text-white rounded-full w-full justify-end"
              >
                Add
              </Button>
            </div>

          </Alert>
        </div>
      </SelectContent>
    </Select>
  )
}

export default Dropdown