import React from 'react'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";




const ContentDialog = ({ id, description, tag, title }: problemStatementType) => {
    return (
        <DialogContent className='bg-white '>
            <DialogHeader>
                <DialogTitle>
                    <div className='flex flex-col gap-3 text-base'>
                        <div className='text-center text-2xl'>Problem Statement</div>
                        <div className='flex gap-3'>
                            <div>PS: </div>
                            <div className=''>{id}</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-left'>Title:</div>
                            <div className='text-sm text-left'>{title}</div>
                        </div>
                    </div>

                </DialogTitle>
                <DialogDescription>
                    <div className='my-2'>
                        <div className='font-semibold text-black text-left'>Description</div>
                        <div

                            className='text-slate-800 max-h-[60vh] overflow-y-auto testimonials text-left'>{description}</div>
                    </div>
                    <div className='flex mt-4 gap-3'>
                        <div className='font-semibold text-black'>Tags: </div>
                        <div className='flex gap-2 flex-wrap text-slate-800'>
                            <div>{tag}</div>

                        </div>
                    </div>



                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}

export default ContentDialog;